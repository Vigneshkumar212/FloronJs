import floronJs from "./floronJs.js";

class floronExtended {
    constructor(){

    }

    imageBlurBackrgound({imageUrl, imageOpacity, imageBlur, resizeImage, imageAlignItems, imageJustifyContent,  backgroundColor, children}){
        var imageStyles = {
            "position": "relative",
            "display": "flex",
            "align-items": imageAlignItems || "center",
            "justify-content": imageJustifyContent || "center",
            "background": backgroundColor,
            "opacity": imageOpacity,
            "filter": "blur("+imageBlur+"px)",
        }
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
                        "width": "100%",
                        "height": "100%",
                        "position": "absolute",
                        "top": 0,
                        "left": 0
                    },
                }),  
            ],
            stylesProps: {
                "position": "relative",
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
                "background": backgroundColor,
                "width": "100%",
                "height": "100%",
                "overflow": "hidden"
            }
        })  
    };

    ButtonPrimary({displayText, iconChild, color, backgroundColor, borderRadius, hoverColor}){
        return floronJs.createElement(
            {
                type: "button",
                children: [
                    ...iconChild,
                    floronJs.createElement({
                        type: "p",
                        stylesProps: {
                            "color": color,
                            "margin": "0px",
                        },
                        content: displayText,
                    })
                ],
                stylesProps:{
                    "padding": "10px 20px",
                    "border-radius": borderRadius,
                    "background-color": backgroundColor,
                    "border": "0px",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                },
                hoverProperties:{
                    "margin-bottom": "10px",
                }
            }
        )
    }
    appBar({title = "", img = "", backgroundColor= "", boxShadow = "", leftChildren = [],}){

    }
}
 
export default new floronExtended();