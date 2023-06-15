const fileService = require('../services/fileService');
// 
class fileController {
    //
    upload = async (req, response) => {
        const result = await fileService.upload(req.file);
        return response.send(result);
    }
    //
    download = async (req, response) => {
        // 
        const { success } = await fileService.download(req.body);
        if (success) {
            // 
            response.download('uploads/download.pdf');
            // 
            setTimeout(() => {
                fileService.deletePdf();
            }, 0);
            // 
        } else {
            response.status(404).send();
        }
    }
}
//
module.exports = new fileController();