

function generateTransactionId() {
    let count=1;
    function createTransactionId(){

        let transId = `TRANSACTION_ID_${count}`;
        ++count;
        const transactionId = Symbol(transId);
        return transactionId;
    }
    return createTransactionId
}

const createTransId=generateTransactionId();

console.log(createTransId());
console.log(createTransId());
console.log(createTransId());