import * as yup from "yup";

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];


// ***************  Images Length Validation  *******************
yup.addMethod(yup.mixed, "imageLength", function imageLength(message){
    return this.test("isValidCountry", message, function (value) {
        const { path, createError } = this;
        if (value.length > 3) {
          return createError({ path, message: message });
        }
        return true;
      });
});
  
export const addSchema = yup.object().shape({
    name: yup.string().trim().required('Full Name is required')
          .min(3,'Name should be in between 3 to 20 characters')
          .max(100,'Name should be in between 3 to 20 characters'),
    price: yup
        .number('Please enter valid Price')
        .typeError('Please enter valid Price')
        .min(999, 'Price should be more than Rs 999')
        .required('Price is required'),
    review: yup
        .number('Please enter valid Review')
        .typeError('Please enter valid Review')
        .min(1, 'Review should be more than 1 digit')
        .required('Review is required'),
    location: yup
        .string()
        .trim()
        .required('Location is required'),
    youtubeLink: yup
        .string()
        .trim()
        .matches(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/, "Youtube Url is incorrect "),
    description: yup
        .string()
        .trim()
        .required('Description is required'),
    miniDescription: yup
        .string()
        .trim()
        .required('Mini Description is required'),
    highlight: yup
        .string()
        .trim()
        .required('Highlight is required'),
    images:yup
        .mixed()
        .imageLength("Images should not be more than 3")
        .test("fileSize", "The file is too large", (value) => {
            const image =  Object.values(value).map(image => image.size);
            return !value|| ( Math.max(...image) <= 500000);
        })
        .test('fileType', 'Unsupported File Format', (value) => {
            const type =  Object.values(value).find(image => SUPPORTED_FORMATS.includes(image.type));
            return !!type})
});


export const addDefaultData = (editData) => ({
    name: editData?.name || 'ash',
    offer:editData?.offer || "false",
    images: editData?.image || [],
    review: editData?.review || '33',
    price: editData?.price || '3333',
    location: editData?.location || 'ajbsj',
    youtubeLink: editData?.youtubeLink || 'https://www.youtube.com/watch?v=gb6vZhBKeXE&list=RDgb6vZhBKeXE&start_radio=1',
    description: editData?.description || 'absd',
    miniDescription: editData?.miniDescription || 'sndjbsd',
    highlight: editData?.highlight || 'sdnsd',
})