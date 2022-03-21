/**
 * caver-js library helps making connection with klaytn node.
 * You can connect to specific klaytn node by setting 'rpcURL' value.
 * default rpcURL is 'https://api.baobab.klaytn.net:8651'.
 */
import Caver from 'caver-js'

const BAOBAB_TESTNET_RPC_URL = 'https://api.baobab.klaytn.net:8651/'

const rpcURL = BAOBAB_TESTNET_RPC_URL

const caver = new Caver(rpcURL)

// const CaverExtKAS = require('caver-js-ext-kas')

// // 인증 ID (AccessKey ID)
// const accessKeyId = '인증 ID'

// // 인증 비밀번호 (Secret AccessKey)
// const secretAccessKey = '인증 비밀번호'

// // 네트워크 ID (Baobab: 1001, Cypress: 8217)
// const chainId = 1001

// const caver = new CaverExtKAS(chainId, accessKeyId, secretAccessKey)

export default caver
