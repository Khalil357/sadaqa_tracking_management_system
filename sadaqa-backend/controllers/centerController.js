const CharityCenter = require('../models/CharityCenter');
const CharityReview = require('../models/CharityReview');

// Register a new charity center
exports.registerCenter = async (req, res) => {
  try {
    const { name, address, mission, category, verification_documents, 
            mpesa_number, bank_account_number, bank_name, swift_code } = req.body;

    // Validate required fields
    if (!name || !category) {
      return res.status(400).json({ 
        success: false,
        message: "Name and category are required fields" 
      });
    }

    const center = await CharityCenter.create({ 
      name, 
      address, 
      mission, 
      category, 
      verification_documents, 
      mpesa_number, 
      bank_account_number, 
      bank_name, 
      swift_code,
      status: 'pending' // Default status
    });

    res.status(201).json({ 
      success: true,
      message: "Charity center registered successfully",
      data: center 
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      success: false,
      message: "Failed to register charity center",
      error: error.message 
    });
  }
};

// Get center by ID
exports.getCenterById = async (req, res) => {
  try {
    const center = await CharityCenter.findById(req.params.id);
    if (!center) {
      return res.status(404).json({ 
        success: false,
        message: "Charity center not found" 
      });
    }

    res.json({ 
      success: true,
      data: center 
    });
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ 
      success: false,
      message: "Failed to fetch charity center",
      error: error.message 
    });
  }
};

// Get pending centers
exports.getPendingCenters = async (req, res) => {
  try {
    const centers = await CharityCenter.find({ status: 'pending' });
    
    res.json({ 
      success: true,
      count: centers.length,
      data: centers 
    });
  } catch (error) {
    console.error('Pending centers error:', error);
    res.status(500).json({ 
      success: false,
      message: "Failed to fetch pending centers",
      error: error.message 
    });
  }
};

// Update center status
exports.updateCenterStatus = async (req, res) => {
  try {
    const { status, reason } = req.body;
    
    // Validate status
    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ 
        success: false,
        message: "Status must be either 'approved' or 'rejected'" 
      });
    }

    // Validate reason for rejection
    if (status === "rejected" && !reason) {
      return res.status(400).json({ 
        success: false,
        message: "Reason is required for rejection" 
      });
    }

    // Update center status
    const updatedCenter = await CharityCenter.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedCenter) {
      return res.status(404).json({ 
        success: false,
        message: "Charity center not found" 
      });
    }

    // Create review record
    await CharityReview.create({
      charity_center_id: req.params.id,
      admin_id: req.user.id,
      status,
      reason
    });

    res.json({ 
      success: true,
      message: `Center ${status} successfully`,
      data: updatedCenter 
    });
  } catch (error) {
    console.error('Status update error:', error);
    res.status(500).json({ 
      success: false,
      message: "Failed to update center status",
      error: error.message 
    });
  }
};

module.exports = {
    registerCenter,
    getCenterById,
    getPendingCenters,
    updateCenterStatus
  };
