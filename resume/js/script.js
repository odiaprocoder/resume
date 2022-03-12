window.onload = function(){
    document.getElementById("download")
        .addEventListener("click",()=>{
            const resume = this.document.getElementById("resume");
            console.log(resume);
            console.log(window);
            html2pdf().from(resume).save();
    })
    document.getElementById("print")
        .addEventListener("click",()=>{
            const resume = this.document.getElementById("resume");
            window.print();
        })

}