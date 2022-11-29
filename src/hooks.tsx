import HeartBrokenIcon from '@mui/icons-material/HeartBroken';



const useAge = () => {
  // you will want some kind of implementation here

   const one_day=1000*60*60*24;

    const d1 = new Date('November 26, 2022 ').getTime();
    const d2 = new Date().getTime();

    const diff = Math.ceil((d2-d1)/(one_day));

    if (diff === 0) {
       return (<div>Posted today</div>);
    } else if (diff === 1) {
        return (<div>Posted yesterday</div>);
    } else {
        return (<div> My love left <span> {diff}</span> days ago  <HeartBrokenIcon style={{width: 60, height: 60}} className='heart'/></div>);
    }
};


export { useAge };
