
export function FetchJobList(){

    let list=[];
    
    for(let i=0;i<=999;i++){
        let obj={
            jobTitle:"How to build e-commerce platform" + i,
            category:"Travel and Tourism",
            words: 400,
            status:'Completed',
            price:400
        }
        list.push(obj)
    }

    list[3].status='Editorial Review'
    list[4].status='Deadline Missed'
    list[7].status='Revision Requested'

    return list;
}