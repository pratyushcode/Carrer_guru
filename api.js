
function careerURl(class_current, subjects, mindsets, interests) {
    let params = new URLSearchParams({
        "class": class_current, "subjects": subjects, "mindsets": mindsets, "interests": interests
    });
    console.log(params.toString());
    return params.toString();
}

