export type ApyData = {

    weather: [{
      description: string;
      icon: string;
      main: string;
      id: number;
    }]
    wind: {
      speed: number;
    };
    sys: {
      country: string;
    };
    main: {
      temp: number;
      humidity: number;
  };
name: string;

};
