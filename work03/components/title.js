export default {
    props:{
        url: String,
        date: String
    },
    template:`
        <div class="titleContainer">  
            <div class="titleRedBlock">
                <div>{{ url }}</div>
            </div>
            <div>{{ date }}</div>        
        </div>
        <hr> 
    `
}