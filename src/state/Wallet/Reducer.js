import {
  DEPOSIT_MONEY_FAILURE,
  DEPOSIT_MONEY_REQUEST,
  DEPOSIT_MONEY_SUCCESS,
  GET_USER_WALLET_FAILURE,
  GET_USER_WALLET_REQUEST,
  GET_USER_WALLET_SUCCESS,
  GET_WALLET_TRANSACTION_FAILURE,
  GET_WALLET_TRANSACTION_REQUEST,
  GET_WALLET_TRANSACTION_SUCCESS,
  TRANSFER_MONEY_FAILURE,
  TRANSFER_MONEY_REQUEST,
  TRANSFER_MONEY_SUCCESS,
} from "./ActionTypes";

const initialState = {
    userWallet:{},
    loading: false,
    error: null,
    transactions: [],
};


const walletReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_WALLET_REQUEST:
        case DEPOSIT_MONEY_REQUEST:
        case TRANSFER_MONEY_REQUEST:
        case GET_WALLET_TRANSACTION_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_WALLET_TRANSACTION_SUCCESS:
            return {
                ...state,
                transactions: action.payload,
                loading: false,
            };
        
        case GET_USER_WALLET_SUCCESS:
        case TRANSFER_MONEY_SUCCESS:
            return {
                ...state,
                userWallet: action.payload,
                loading: false,
            };

        case DEPOSIT_MONEY_SUCCESS:
            return {
                ...state,
                userWallet: action.payload,
                loading: false,
            };
        
        case GET_USER_WALLET_FAILURE:
        case DEPOSIT_MONEY_FAILURE:
        case TRANSFER_MONEY_FAILURE:
        case GET_WALLET_TRANSACTION_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        default:
            return state;
    }
}

export default walletReducer;