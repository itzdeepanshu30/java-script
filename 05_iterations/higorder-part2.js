const myObject={
        js:'JAvascript',
        cpp:'c++'
}
for (const key in myObject) {
   // console.log(`${key}  for vlaue ${myObject[key]}`);
}

// for Each loop

const coding=["js","cpp","java"]

//coding.forEach((val)=>{console.log(val)});


const mycoding=[
{
    lang:"js",
    langName:"javascript"
},

{
    lang:"rb",
    langName:"ruby"
},
{
    lang:"cpp",
    langName:"c++"
}
]
mycoding.forEach((item)=>{console.log(item.langName
)})