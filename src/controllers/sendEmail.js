import { ResponseMessage } from "../utils/responseMessage"



export const sendEmail = async(req, res) => {
try{
   const { 
    emailService,
    emailPassword,
    emailTemplate,
  } = req.body;

  


}
catch(error){
    return res.status(500).json(new ResponseMessage("error",500,`Internal Server Error : ${error.message}`))
}
}