function sendResult(res, result){
    res.status(200).send(result);
}

function sendError(res, err){
    res.status(500).send(err);
}

module.exports = {
    sendResult: sendResult,
    sendError: sendError
};

