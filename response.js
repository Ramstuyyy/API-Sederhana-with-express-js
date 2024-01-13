const response = (statusCode, data, massage, res) => {
    res.status(statusCode).json({
        payload: {
            status_Code: statusCode,
            datas: data,
            
        },
        massage:massage,
        pagination: {
            prev: "",
            next: "",
            max:""
        }
    })
}

module.exports = response