import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const customTheme: CustomThemeConfig = {
  name: 'custom-theme',
  properties: {
    // =~= Theme Properties =~=
    '--theme-font-family-base': `system-ui`,
    '--theme-font-family-heading': `system-ui`,
    '--theme-font-color-base': '0 0 0',
    '--theme-font-color-dark': '255 255 255',
    '--theme-rounded-base': '6px',
    '--theme-rounded-container': '6px',
    '--theme-border-base': '1px',
    // =~= Theme On-X Colors =~=
    '--on-primary': 'var(--color-tertiary-500)',
    '--on-secondary': 'var(--color-primary-800)',
    '--on-tertiary': 'var(--color-primary-800)',
    '--on-success': 'var(--color-tertiary-500)',
    '--on-warning': 'var(--color-primary-800)',
    '--on-error': 'var(--color-primary-800)',
    '--on-surface': 'var(--color-tertiary-500)',
    // =~= Theme Colors  =~=
    // primary | #343A40
    '--color-primary-50': '225 225 226', // #e1e1e2
    '--color-primary-100': '214 216 217', // #d6d8d9
    '--color-primary-200': '204 206 207', // #cccecf
    '--color-primary-300': '174 176 179', // #aeb0b3
    '--color-primary-400': '113 117 121', // #717579
    '--color-primary-500': '52 58 64', // #343A40
    '--color-primary-600': '47 52 58', // #2f343a
    '--color-primary-700': '39 44 48', // #272c30
    '--color-primary-800': '31 35 38', // #1f2326
    '--color-primary-900': '25 28 31', // #191c1f
    // secondary | #CED4DA
    '--color-secondary-50': '248 249 249', // #f8f9f9
    '--color-secondary-100': '245 246 248', // #f5f6f8
    '--color-secondary-200': '243 244 246', // #f3f4f6
    '--color-secondary-300': '235 238 240', // #ebeef0
    '--color-secondary-400': '221 225 229', // #dde1e5
    '--color-secondary-500': '206 212 218', // #CED4DA
    '--color-secondary-600': '185 191 196', // #b9bfc4
    '--color-secondary-700': '155 159 164', // #9b9fa4
    '--color-secondary-800': '124 127 131', // #7c7f83
    '--color-secondary-900': '101 104 107', // #65686b
    // tertiary | #E9ECEF
    '--color-tertiary-50': '252 252 253', // #fcfcfd
    '--color-tertiary-100': '251 251 252', // #fbfbfc
    '--color-tertiary-200': '250 250 251', // #fafafb
    '--color-tertiary-300': '246 247 249', // #f6f7f9
    '--color-tertiary-400': '240 242 244', // #f0f2f4
    '--color-tertiary-500': '233 236 239', // #E9ECEF
    '--color-tertiary-600': '210 212 215', // #d2d4d7
    '--color-tertiary-700': '175 177 179', // #afb1b3
    '--color-tertiary-800': '140 142 143', // #8c8e8f
    '--color-tertiary-900': '114 116 117', // #727475
    // success | #124f1c
    '--color-success-50': '219 229 221', // #dbe5dd
    '--color-success-100': '208 220 210', // #d0dcd2
    '--color-success-200': '196 211 198', // #c4d3c6
    '--color-success-300': '160 185 164', // #a0b9a4
    '--color-success-400': '89 132 96', // #598460
    '--color-success-500': '18 79 28', // #124f1c
    '--color-success-600': '16 71 25', // #104719
    '--color-success-700': '14 59 21', // #0e3b15
    '--color-success-800': '11 47 17', // #0b2f11
    '--color-success-900': '9 39 14', // #09270e
    // warning | #c79200
    '--color-warning-50': '247 239 217', // #f7efd9
    '--color-warning-100': '244 233 204', // #f4e9cc
    '--color-warning-200': '241 228 191', // #f1e4bf
    '--color-warning-300': '233 211 153', // #e9d399
    '--color-warning-400': '216 179 77', // #d8b34d
    '--color-warning-500': '199 146 0', // #c79200
    '--color-warning-600': '179 131 0', // #b38300
    '--color-warning-700': '149 110 0', // #956e00
    '--color-warning-800': '119 88 0', // #775800
    '--color-warning-900': '98 72 0', // #624800
    // error | #d5a294
    '--color-error-50': '249 241 239', // #f9f1ef
    '--color-error-100': '247 236 234', // #f7ecea
    '--color-error-200': '245 232 228', // #f5e8e4
    '--color-error-300': '238 218 212', // #eedad4
    '--color-error-400': '226 190 180', // #e2beb4
    '--color-error-500': '213 162 148', // #d5a294
    '--color-error-600': '192 146 133', // #c09285
    '--color-error-700': '160 122 111', // #a07a6f
    '--color-error-800': '128 97 89', // #806159
    '--color-error-900': '104 79 73', // #684f49
    // surface | #374553
    '--color-surface-50': '225 227 229', // #e1e3e5
    '--color-surface-100': '215 218 221', // #d7dadd
    '--color-surface-200': '205 209 212', // #cdd1d4
    '--color-surface-300': '175 181 186', // #afb5ba
    '--color-surface-400': '115 125 135', // #737d87
    '--color-surface-500': '55 69 83', // #374553
    '--color-surface-600': '50 62 75', // #323e4b
    '--color-surface-700': '41 52 62', // #29343e
    '--color-surface-800': '33 41 50', // #212932
    '--color-surface-900': '27 34 41', // #1b2229
  },
};
