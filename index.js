import FloronExtended from "./floronExtended.js";
import floronJs from "./floronJs.js";

floronJs.build(
    [
       FloronExtended.imageBlurBackrgound(
            {
                resizeImage: true,
                imageUrl: "./omen.jpg",
                imageOpacity: 1,
                imageBlur: 50,
                backgroundColor: "#171717",
                children: [
                    floronJs.createElement({
                        type: "div",
                        stylesProps: {
                            "padding": 0,
                            "margin": 0,
                            "display": "flex",
                            "justify-content": "center",
                            "align-items": "center",
                            "width": "100%",
                            "height": "100%",
                            "flex-direction":"column"
                        },
                        children: [
                            floronJs.h1({
                                content: "Hi there! Welcome to floronJs Js",
                                stylesProps:{
                                    "font-family": "sans-serif",
                                    "color":"#ffffff",
                                    "margin": "2px"
                                }
                            }),
                            floronJs.p({
                                content: "Open this folder and edit 'index.js'",
                                stylesProps:{
                                    "margin": "2px",
                                    "color": "#fff",
                                    "font-family": "sans-serif",
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
floronJs.pageStyle({
    "padding": 0,
    "margin": 0,
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "width": "100%",
    "height": "100%"
})

function clickHereButton(){
    var tag =  /* floronJs.createElement({
        content: "Click here to open documentation",
        stylesProps:{
            color: "#008eff",
            margin: "2px",
            textDecoration: "underline",
            cursor: "pointer",
            fontFamily: "sans-serif",
        },
    }); */
    FloronExtended.ButtonPrimary({
        displayText: "Click here to open documentation",
        iconChild: [],
        color: "#fff",
        backgroundColor: "#00000090",
        borderRadius: "5px",
        hoverColor: "0px"
    })
    tag.addEventListener("click", ()=>{
        alert("floronJs is still in beta version.")
    })
    return tag;
}
floronJs.defaultStyleProperties({
    "font-family" : "sans-serif",
    "transition-duration" : "0.25s"
}) 
