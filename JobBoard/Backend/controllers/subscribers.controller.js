const Subscriber = require("../models/subscriber.model")

// Controller methods

// Get all subscribers
exports.getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.status(200).json(subscribers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single subscriber
exports.getSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    res.status(200).json(subscriber);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new subscriber
exports.createSubscriber = async (req, res) => {
  try {
    const newSubscriber = new Subscriber(req.body);
    const savedSubscriber = await newSubscriber.save();
    res.status(201).json(savedSubscriber);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a subscriber
exports.updateSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(subscriber);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a subscriber
exports.deleteSubscriber = async (req, res) => {
  try {
    const removedSubscriber = await Subscriber.findByIdAndDelete(req.params.id);
    res.status(200).json(removedSubscriber);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
