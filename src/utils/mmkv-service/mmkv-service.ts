import { MMKVInstance, MMKVLoader } from 'react-native-mmkv-storage'

let mmkvInstance: MMKVInstance | null

export function getMMKVLoader() {
  if (mmkvInstance) {
    return mmkvInstance
  }
  mmkvInstance = new MMKVLoader().initialize()
  return mmkvInstance
}
