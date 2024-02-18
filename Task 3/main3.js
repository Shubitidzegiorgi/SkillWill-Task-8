// Task 3

/*
დაწერე ასინქრონული ფუნქცია, რომელიც
არგუმენტად იღებს ობიექტს და აკეთებს
deep copy-ს
● ფუნქციამ უნდა გამოიძახოს reject თუ
არგუმენტი არ არის ობიექტი. თუ
ყველაფერი კარგად არის, გამოიძახოს
resolve კოპირებული ობიექტით
*/

const deepCopyAsync = async (obj) => {
    return new Promise((resolve, reject) => {
        if (typeof obj !== 'object' || obj === null) {
            reject(new Error('Argument must be an object'));
        } else {
            try {
                const copiedObj = JSON.parse(JSON.stringify(obj));
                resolve(copiedObj);
            } catch (error) {
                reject(error);
            }
        }
    });
}

const copyObject = async () => {
    const objToCopy = { name: "Giorgi", lastName:"Shubitidze", skills: ["HTML", "CSS", "Bootstrap","GIT","Figma","Javascript","React.js"] };

    try {
        const copiedObj = await deepCopyAsync(objToCopy);
        console.log('Deep copy successful:');
        console.log(copiedObj);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

copyObject();