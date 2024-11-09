import config from "../config/config";
import { convertObjectFromSnakeCamelCase } from "../utils/snakeToCamelCase";
import BaseApi from "./baseApi";

export interface InitializePaymentArgs {
    email: string;
    amount: number;
    callback_url?: string;
    metadata?: {
        amount: string;
        email: string;
        name: string;
    };
}

interface IntializePaymentRawResponse {
    status: boolean;
    message: string;
    data: {
        authorization_url: string;
        access_code: string;
        reference: string
    }
}

interface InitializeResponse {
    authorizationUrl: string;
    accessCode: string;
    reference: string;
}

interface VerifyPaymentResponse {
    status: boolean;
    message: string;
    data: {
        amount: number;
        reference: string;
        status: string;
        metadata: {
            email: string;
            name: string;
            amount: number;
        }
    }
}
class PaystackApi extends BaseApi {

    requestInit = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.paystackSecret}`
        }
    }
    constructor(){
        super(config.paystackUrl as string);
    }

    initializePayment = async (paymentDetails: InitializePaymentArgs) => {
        const response = await this.post<IntializePaymentRawResponse>(
            '/transaction/initialize',
            paymentDetails,
            undefined,
            this.requestInit
        );

        // console.log('Raw response data:', response.data);
        const convertedData = convertObjectFromSnakeCamelCase<InitializeResponse>(response.data);
        // console.log('Converted response data:', convertedData);
        return convertedData;
    };

    verifyPayment = (paymentReference: string) => 
        this.get<VerifyPaymentResponse>(
            `/transaction/verify/${paymentReference}`,
            undefined,
            this.requestInit
        );
}

const paystackApi = new PaystackApi();

export default paystackApi;
