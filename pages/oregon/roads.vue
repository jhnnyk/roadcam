<template>
  <div>
    Oregon roads here
    <!-- {{ allCams }} -->
    {{ hwys }}
  </div>
</template>

<script>
import tripcheckData from '../oregon/oregonroads.json'

export default {
  async fetch() {
    await tripcheckData.CCTVInventoryRequest.forEach((cam) => {
      // add all cameras to local state
      this.allCams.push(cam)

      // create list of highways
      const hwyIndex = this.hwys.findIndex(
        (hwy) => hwy.name === cam['route-id'].toLowerCase()
      )

      if (hwyIndex === -1) {
        this.hwys.push({ name: cam['route-id'].toLowerCase() })
      }
    })
  },

  data() {
    return {
      allCams: [],
      hwys: [],
    }
  },
}
</script>
