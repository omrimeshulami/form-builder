const Form = require('../schema/form')
const FORMSUB = require('../schema/formSubs')

const services = {
    retrieveForms: async () => {
        let forms;
        try {
            forms = await Form.find({});
            return forms

        } catch (e) {
            console.log(e)
        }
    },
    retrieveFormSubsById: async (id) => {
        let subs;
        try {
            subs = await FORMSUB.findOne({formID: id})
            return subs.data
        } catch (e) {
            console.log(e)
        }
    },
    retrieveFormById: async (id) => {
        let form;
        try {
            form = await Form.findById(id)
            return form
        } catch (e) {
            console.log(e)
        }
    },
    deleteFormById: async (id) => {
        console.log(id)
        try {
            await Form.findByIdAndRemove(id, {useFindAndModify: false});
            await FORMSUB.findOneAndDelete({formID: id});
        } catch (e) {
            console.log(e)
        }
    },
    uploadForm: async (formData) =>{
        let form
        try{
             form = {
                title: "",
                submissionsNumber: 0,
                fields: []
            };
            form.title = formData.title
            formData.content.map(item => {
                form.fields.push({
                    fieldLabel: item.fieldLabel,
                    inputName: item.inputName,
                    inputType: item.inputType
                })
            })
            let formModel = new Form(form); // creat obect form model
            await formModel.save(); // saving the indo in the database
             return formModel
        }catch (e) {
            console.log(e)
        }
    },
    submitSubForForm: async (submitInfo) =>{
        let result
        try{
            await Form.findByIdAndUpdate(submitInfo.id,{$inc:{submissionsNumber:1}})
            result = await FORMSUB.findOne({formID: submitInfo.id})
            if(!result){
                let formSubsModel = new FORMSUB({formID: submitInfo.id, data: [submitInfo.data]});
                await formSubsModel.save();
            }
            else{
                result.data.push(submitInfo.data)
                result.save()
            }
        }
        catch (e) {
            console.log(e)
        }
    }
}

module.exports = services