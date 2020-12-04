import {
  Body,
  Controller,
  HttpService,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ConfigService } from 'src/config/config.service';
import { PaymentDto, PaymentMethodDto } from './dto/payment-method.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(
    private paymentService: PaymentService,
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  @UseGuards(AuthGuard())
  @Post()
  async addPaymentMethod(
    @Res() res,
    @Body() createPaymentMethod: PaymentMethodDto,
  ) {
    try {
      const paymentMethod = await this.paymentService.addPaymentMethod(
        createPaymentMethod,
      );
      return res.status(HttpStatus.OK).json({
        msg: 'Payment method has been added successfully',
        paymentMethod,
      });
    } catch (e) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        msg: 'Error registering payment method',
      });
    }
  }

  @UseGuards(AuthGuard())
  @Post('/pay')
  async makePayment(@Req() request, @Res() res, @Body() payment: PaymentDto) {
    const user = request.user;
    try {
      // 1st Step: get token :)
      const token = await this.getToken();

      // 2nd Step: call star-connect payment endpoint
      const paymentData = await this.httpService
        .post(
          `https://api.preprod.fusionfabric.cloud/poc/star-connect/v2/payments/widget`,
          {
            data: {
              customer_id: '334125710622853652',
              payee_description: 'Test',
              show_consent_confirmation: true,
              template_identifier: 'SEPA',
              return_to:
                'https://www.nao.org.uk/graduateblog/wp-content/uploads/sites/19/2014/07/job-done.jpg',
              payment_attributes: {
                end_to_end_id: '#123123123',
                customer_ip_address: '10.0.0.1',
                creditor_name: user.firstName,
                currency_code: 'EUR',
                amount: payment.amount.toString(),
                description: payment.description,
                creditor_iban: 'GB33BUKB20201555555555',
                mode: 'normal',
              },
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .toPromise();
      return res.status(HttpStatus.OK).json(paymentData.data);
    } catch (e) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        msg: 'Error making a new payment',
      });
    }
  }

  async getToken() {
    const body = await this.httpService
      .post(
        this.configService.get('ACCESS_TOKEN_URL'),
        'grant_type=client_credentials',
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          auth: {
            username: this.configService.get('CLIENT_ID'),
            password: this.configService.get('CLIENT_SECRET'),
          },
        },
      )
      .toPromise();

    // tslint:disable-next-line: no-string-literal
    return body.data['access_token'];
  }
}
