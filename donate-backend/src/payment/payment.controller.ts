import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PaymentMethodDto } from './dto/payment-method.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

//   @UseGuards(AuthGuard())
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
}
