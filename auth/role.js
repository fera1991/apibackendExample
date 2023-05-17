module.exports = (role)  =>{
    return (req, res, next) => {
        if (req.user.role != role) {

            res.status(401).send({
                message: "Unauthorized",
                errors: detailErrors,
              });
        }
        next();
    }
}
//git1