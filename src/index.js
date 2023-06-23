import Floron from "./floronJs.js";
import {
    imageBlurBackrgound
} from "./floronExtended.js";

Floron.build(
    [
        imageBlurBackrgound(
            {
                resizeImage: true,
                imageUrl: "./omen.jpg",
                imageOpacity: 1,
                imageBlur: 50,
                backgroundColor: "#171717",
                children: [
                    Floron.createElement({
                        type: "div",
                        stylesProps: {
                            padding: 0,
                            margin: 0,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            flexDirection:"column"
                        },
                        children: [
                            Floron.h1({
                                content: "Hi there! Welcome to Floron Js",
                                stylesProps:{
                                    fontFamily: "sans-serif",
                                    color:"#ffffff",
                                    margin: "2px"
                                }
                            }),
                            Floron.p({
                                content: "Open this folder and edit 'index.js'",
                                stylesProps:{
                                    margin: "2px",
                                    color: "#fff",
                                    fontFamily: "sans-serif",
                                },
                            }),
                            clickHereButton()
                        ]
                    })
                ]
            }
        )
    ]
)
Floron.pageStyle({
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
})

function clickHereButton(){
    var tag =  Floron.a({
        content: "Click here to open documentation",
        stylesProps:{
            color: "#008eff",
            margin: "2px",
            textDecoration: "underline",
            cursor: "pointer",
            fontFamily: "sans-serif",
        },
    });
    tag.addEventListener("click", ()=>{
        alert("Floron is still in beta version.")
    })
    return tag;
}