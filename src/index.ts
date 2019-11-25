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
  init() {
    this.setThemeVariable('default', palette.default);
    this.setThemeVariable('white', palette.white);
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
    palette2: {
      ...getColorsFromKey('blue', 'primary'),
      ...getColorsFromKey('yellow-vivid', 'accent'),
      ...getColorsFromKey('blue-grey', 'support'),
      ...getColorsFromKey('red-vivid', 'danger'),
    },
    palette3: { // Palette 1
      ...getColorsFromKey('cyan', 'primary'),
      ...getColorsFromKey('blue-grey', 'accent'),
      ...getColorsFromKey('indigo', 'support'),
      ...getColorsFromKey('red-vivid', 'danger'),
    },
    palette4: { // Palette 2
      ...getColorsFromKey('blue', 'primary'),
      ...getColorsFromKey('yellow-vivid', 'accent'),
      ...getColorsFromKey('blue-grey', 'support'),
      ...getColorsFromKey('red-vivid', 'danger'),
    },
    palette5: { // Palette 3
      ...getColorsFromKey('purple', 'primary'),
      ...getColorsFromKey('green-vivid', 'accent'),
      ...getColorsFromKey('blue-grey', 'support'),
      ...getColorsFromKey('red-vivid', 'danger'),
    },
    palette6: { // Palette 4
      ...getColorsFromKey('green', 'primary'),
      ...getColorsFromKey('blue-grey', 'accent'),
      ...getColorsFromKey('blue', 'support'),
      ...getColorsFromKey('red-vivid', 'danger'),
    },
    palette7: { // Palette 5
      ...getColorsFromKey('blue-grey', 'primary'),
      ...getColorsFromKey('light-blue', 'accent'),
      ...getColorsFromKey('pink-vivid', 'support'),
      ...getColorsFromKey('red-vivid', 'danger'),
    },
    palette8: { // Palette 6
      ...getColorsFromKey('red', 'primary'),
      ...getColorsFromKey('yellow-vivid', 'accent'),
      ...getColorsFromKey('warm-grey', 'support'),
      ...getColorsFromKey('red-vivid', 'danger'),
    },
  },
};
