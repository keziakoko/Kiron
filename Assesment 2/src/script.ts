window.onload = function () {
    fetchData();
};
/**
 * fetchData function to fetch json object from api
 */
let fetchData = (): void => {
    fetch('./scene-manager.json')
        .then((response) => {
            response.json().then(json => {
                if (typeof (json) === "object") {
                    if (json.hasOwnProperty('children')) {
                        document.getElementById("outputDiv").innerHTML += `<ul id="treeRoot"><li>
                <i class="fa-solid fa-angle-right caretIcon"></i><div class="panel">${traverse(json, true)}</ul>`
                    } else {
                        document.getElementById("outputDiv").innerHTML += `<ul id="treeRoot"><li>
                <i class="fa-solid fa-angle-right caretIcon"></i><div class="panel">${traverse(json, false)}</li></ul>`
                    }
                } else {
                    document.getElementById("outputDiv").innerHTML += `<ul id="treeRoot">${traverse(json,false)}</ul>`
                }

                // Assign event listeners to dropdowns
                var toggler = document.getElementsByClassName("panel");
                var i;

                for (i = 0; i < toggler.length; i++) {
                    toggler[i].addEventListener("click", function () {
                        this.parentElement.querySelector(".nested").classList.toggle("active");
                        this.parentElement.querySelector(" .caretIcon").classList.toggle('caretDown')
                    });
                }
            });
        })
}

/**
 * traverse recursive function to traverse an object
 * params {obj} the object that needs to be traversed
 * params {isChild} if the current item has key children as child
 * @returns String build - the built string
 */
let traverse = (obj: Object, isChild:boolean): string => {
    let build = ``;
    for (let item in obj) {
        if (Array.isArray(obj[item])) {
            build += `</div><ul class="nested">${traverse(obj[item], false)}</ul>`;
        } else if (typeof (obj[item]) === "object") {
            if (obj[item].hasOwnProperty('children')) {
                build += `<li><i class="fa-solid fa-angle-right caretIcon"></i><div class="panel">${traverse(obj[item], true)}</div></li>`;
            } else {
                build += `<li>${traverse(obj[item], false)}</li>`;
            }
        } else {
            if (isChild) {
                if (item === "type") {
                    build += `${obj[item]}`;
                } else if (item === "id") {
                    build += `#${obj[item]}<br>`;
                } else {
                    build += `${item}: ${obj[item]}<br>`;
                }
            } else {
                build += `<li>${item}: ${obj[item]}</li>`;
            }
        }
    }
    return build;
}