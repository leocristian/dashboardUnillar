<template>
  <div>
    <WidgetsStatsA />
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <h4 id="traffic" class="card-title mb-0">Vendas</h4>
                <!-- <div class="small text-medium-emphasis">2021</div> -->
              </CCol>
              <CCol :sm="7" class="d-none d-md-block">
                <CInputGroup class="mb-3">
                    <CFormInput placeholder="Buscar vendedor" aria-label="Vendedor" v-model="seller" aria-describedby="button-addon2"/>
                    <CButton type="button" color="primary" id="button-addon2"><CIcon :icon="'cilSearch'" v-on:click="searchSeller"/></CButton>
                </CInputGroup>
              </CCol>
            </CRow>
            <CRow>
              <!-- <MainChartExample
                style="height: 300px; max-height: 300px; margin-top: 40px"
              /> -->
              <CChartBarExample style="height: 500px; width: 1000px; margin: 0 auto"/>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <!-- <WidgetsStatsD /> -->
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader> Vendedores </CCardHeader>
          <CRow>
            <CChartPieExample style="height: 400px; width: 400px" />
          </CRow>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>

// import MainChartExample from './charts/MainChartExample'
import CChartBarExample from './charts/CChartBarExample.vue'
import WidgetsStatsA from './widgets/WidgetsStatsTypeA.vue'
// import WidgetsStatsD from './widgets/WidgetsStatsTypeD.vue'
import CChartPieExample from './charts/CChartPieExample.vue'
// import BarChart from './charts/BarChart.vue'

export default {
  name: 'Dashboard',
  components: {
    // MainChartExample,
    CChartBarExample,
    // BarChart,
    WidgetsStatsA,
    // WidgetsStatsD,
    CChartPieExample,
  },
   data() {
    return {
      seller: ""
    }
  },
   methods: {
    async searchSeller() {
      alert('Buscando vendedor ' + this.seller)
    }
  }
}
</script>
