import floronJs from "./floronJs.js";

function imageBlurBackrgound({imageUrl, imageOpacity, imageBlur, resizeImage, imageAlignItems, imageJustifyContent,  backgroundColor, children}){
    var imageStyles = {
        position: "relative",
        display: "flex",
        alignItems: imageAlignItems || "center",
        justifyContent: imageJustifyContent || "center",
        background: backgroundColor,
        opacity: imageOpacity,
        filter: "blur("+imageBlur+"px)",
    }
    console.log(resizeImage);
    if (resizeImage){
        imageStyles.width= "100%"
        imageStyles.height= "100%"
    }else{
    }
    return floronJs.createElement({
        type: "div",
        children: [
            floronJs.createElement({
                type: "img",
                stylesProps: imageStyles,
                properties:{
                    src: imageUrl,
                }
            }),
            floronJs.createElement({
                type: "div",
                children: children,
                stylesProps: {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0
                },
            }),  
        ],
        stylesProps: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: backgroundColor,
            width: "100%",
            height: "100%",
            overflow: "hidden"
        }
    })  
};

export {imageBlurBackrgound};