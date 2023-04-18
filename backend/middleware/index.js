exports.parseData = (req, res, next) => {
    const { tags, featured} = req.body;

    if(tags)req.body.tags = JSON.parse(tags);
    if(featured){
        try {
            req.body.featured = JSON.parse(featured);            
        } catch (error) {
            console.error(error);
            res.status(400).json({
                message : "Invalid feature field"
            })
            return;
        }
    }

    next();
}