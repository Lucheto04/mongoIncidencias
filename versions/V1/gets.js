
export const userV1 = (req, next) => {
    if(!req.rateLimit) return;
    console.log('ok 1.0.0');
    console.log(req.user);
    return next()
}