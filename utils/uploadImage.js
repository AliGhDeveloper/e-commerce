export default async function uploadImage(files) { 
    let newArray = [];
    for (const file of files){
        const formData = new FormData();
        formData.append( 'file' , file );
        formData.append( 'upload_preset', process.env.CLOUD_PRESET )
        formData.append( 'cloud_name', process.env.CLOUD_NAME )

        const response = await fetch('https://res.cloudinary.com/dgapvh64c/image/fetch/', {
            method: 'POST',
            body: formData
        });
        
        console.log(response)
    }
}