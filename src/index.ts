import palette from './palette';
import computeTextColor from './computeTextColor';

const getColorsFromKey = (getKey: string, returnKey: string) => new Array(10).fill(0)
  .map((i, idx) => ({ key: `${returnKey}${idx > 0 ? `-${idx + 1}` : ''}`, value: palette[`${getKey}-${idx + 1}`] }))
  .reduce((prev, current) => ({
    ...prev,
    [current.key]: current.value,
  }), {});

export default {
  computeTextColor,
  palette,
  setTheme(theme: {[index: string]: any}) {
    Object.keys(theme)
      .forEach((key) => this.setThemeVariable(key, theme[key]));
  },
  setThemeVariable(property: string, value: string) {
    let propertyName;
    if (property.slice(0, 2) !== '--') {
      propertyName = `--${property}`;
    } else {
      propertyName = property;
    }
    document.documentElement.style
      .setProperty(propertyName, value);
    document.documentElement.style
      .setProperty(`${propertyName}-text`, computeTextColor(value, true));
  },
  themes: {
    palette1: {
      ...getColorsFromKey('light-blue', 'primary'),
      ...getColorsFromKey('cool-grey', 'accent'),
      ...getColorsFromKey('pink-vivid', 'support'),
      ...getColorsFromKey('red-vivid', 'danger'),
    },
    green: {
      'primary': '#388E3C',
      'primary-light': '#4CAF50',
      'accent': '#00BCD4',
    },
    blue: {
      'primary': '#1565c0',
      'primary-light': '#1e88e5',
      'accent': '#78909c',
    },
  },
};
