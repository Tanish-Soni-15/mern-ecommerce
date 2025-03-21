import { Order } from "../model/Order.js";

const createOrder = async (req, res) => {
    const item = new Order(req.body);
    
    try {
        const docs = await item.save()
        const result = await docs.populate('user');
        
        res.status(200).json(result);

    } catch (error) {
        res.status(400).json(error);
    }
}

const fetchAllOrder = async (req, res) => {
    let query = Order.find({});
    const totalDocs = await Order.countDocuments(query.getFilter());
    if (req.query._page && req.query._limit) {
      const pageSize = req.query._limit;
      const page = req.query._page;
      query = query.skip(pageSize * (page - 1)).limit(pageSize);
    }
  
    try {
      const docs = await query.exec();
      res.set({
        'X-Total-Count': totalDocs,
        'Access-Control-Expose-Headers': 'X-Total-Count'
      });

      res.status(200).json(docs);
      
    } catch (err) {
      res.status(400).json(err);
    }
}
const deleteOrder=async (req,res)=>{
    const { id } = req.params;
    
    try {
    const doc = await Order.findByIdAndDelete(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
const updateOrder=async (req,res)=>{
    const { id } = req.params;
      
  try {
    const cart = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    const result=await cart.populate('user')
    
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};



export { createOrder ,fetchAllOrder,deleteOrder,updateOrder};