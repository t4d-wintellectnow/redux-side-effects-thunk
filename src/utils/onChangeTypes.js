const onChangeTypes = {
  onStringChange: component =>
    ({ target: { name, value } }) =>
      component.setState({ [ name ]: String(value) }),
  onNumberChange: component =>
    ({ target: { name, value } }) => {
      const convertedValue = Number(value);
      return component.setState({ [ name ]: isNaN(convertedValue) ? 0 : convertedValue });
    },
};

export const applyOnChangeTypes = (component, selectedOnChangeTypes = 'ALL') => {

  const typesToApply = selectedOnChangeTypes === 'ALL'
    ? Object.keys(onChangeTypes)
    : selectedOnChangeTypes.map(oct => 'on' + oct + 'Change');

  typesToApply.forEach(oct => component[oct] = onChangeTypes[oct](component));

};