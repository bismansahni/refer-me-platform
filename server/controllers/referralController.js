const ReferralRequest = require('../models/ReferralRequest');

exports.createReferralRequest = async (req, res) => {
    const { title, description, industry } = req.body;
    try {
        const newReferralRequest = new ReferralRequest({
            user: req.user.id,
            title,
            description,
            industry
        });

        const referralRequest = await newReferralRequest.save();

        res.json(referralRequest);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getReferralRequests = async (req, res) => {
    try {
        const referralRequests = await ReferralRequest.find().populate('user', ['name', 'email']);
        res.json(referralRequests);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
