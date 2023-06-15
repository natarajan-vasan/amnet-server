var mammoth = require("mammoth");
var fs = require('fs');
var convertapi = require('convertapi')('jgYytw5JTT6UgXYo');
// 
class fileService {
    // 
    async upload(file) {
        try {
            let filePath = "uploads/" + file.filename;
            let result = await mammoth.convertToHtml({ path: filePath });
            fs.unlinkSync(filePath);
            return result.value;
        } catch (error) {
            console.error(error)
            return {};
        }
    }
    // 
    async download(params) {
        const output = { success: false };
        const filePathHtml = 'uploads/download.html';
        try {
            // 
            fs.writeFileSync(filePathHtml, params.htmlData);
            // 
            var result = await convertapi.convert('pdf', { File: filePathHtml });
            // 
            await result.saveFiles('uploads');
            //
            fs.unlinkSync(filePathHtml);
            // 
            output.success = true;
            return output;
            // 
        } catch (error) {
            return output;
        }
    }
    // 
    deletePdf() {
        const filePathPdf = 'uploads/download.pdf';
        fs.unlinkSync(filePathPdf);
    }
}
//
module.exports = new fileService();