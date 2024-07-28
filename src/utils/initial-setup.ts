import { seedDatabase } from './initial-seed'
import { MMKV_BUDGET, MMKV_INITIAL_SETUP_DONE } from '../schema/mmkv-keys'
import { getMMKVLoader } from './mmkv-service/mmkv-service'

const storage = getMMKVLoader()

export async function initialSetup() {
  const isSetupDone = await storage.getBoolAsync(MMKV_INITIAL_SETUP_DONE)
  if (!isSetupDone) {
    await seedDatabase()
    await storage.setIntAsync(MMKV_BUDGET, 20000)
    await storage.setBoolAsync(MMKV_INITIAL_SETUP_DONE, true)
  }
}
