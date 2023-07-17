
const shuffleArray=(arr)=>{

    return [...arr].sort(()=>Math.random() - 0.5);  //dizi elemanlarının sırasını rastgele karıştırmak için shuffle algoritması
}

export const fetchQuizApi=async(count)=>{
    const url=`https://opentdb.com/api.php?amount=${count}&category=23&difficulty=medium`;
    const data= await (await fetch(url)).json()
    return data.results.map((dt)=>({
        ...dt,
        answers:shuffleArray([...dt.incorrect_answers,dt.correct_answer])
    }));

}