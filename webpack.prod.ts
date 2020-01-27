import { Configuration } from 'webpack'
import merge from 'webpack-merge'

import { commonConfig } from './webpack.common'

const prodConfig: Configuration = merge(commonConfig, {
  mode: 'production',
  bail: true
})

export default prodConfig
