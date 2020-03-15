import React from "react";
import { shallow } from "enzyme";
import Chart from "./index";


const props = {
  data: {
    labels: [
      'Label 1'
    ],
    datasets:[
    {
        label: 'Cotação 01',
        backgroundColor: '#FFF',
        data: [1]
    }
    ]
  }
};

describe("Chart component", () => {
  const component = shallow(<Chart {...props} />);

  it("should render chart component", () => {
    expect(component).toMatchSnapshot();
  });


  it("check if props render correctly", () => {
    expect(component.find('h3').text()).toEqual(`Veja aqui os resultados para ${props.data.datasets[0].label}`);
  });

});