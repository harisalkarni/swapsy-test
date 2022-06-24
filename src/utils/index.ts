export function renderName(val: string) { 
    switch (val) {
        case 'ETH':
            return 'Ethereum';
        case 'USDT':
            return 'USDT';
        case 'USDC':
            return 'USDC';
        case 'DAI':
            return 'DAI';
        default:
            break;
    }
 }