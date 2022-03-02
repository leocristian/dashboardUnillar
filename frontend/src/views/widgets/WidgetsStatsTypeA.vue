<template>
  <CRow :style="'margin: 0 auto; margin-left: 20%'">
    <CHeaderBrand :style="'margin: 0 0 10px 21%; font-weight: bold; font-size: 30px'">Ranking de vendedores</CHeaderBrand>
    <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="success" :style="'padding-bottom: 20px'">
        <template #value>Mara</template>
        <template #title>Vendas: R$7.234.00</template>
      </CWidgetStatsA>
    </CCol>
    <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="warning" :style="'padding-bottom: 20px'">
        <template #value>José</template>
        <template #title>Vendas: R$7.234.00</template>
      </CWidgetStatsA>
    </CCol>
    <CCol :xs="3">
     <CWidgetStatsA class="mb-4" color="danger" :style="'padding-bottom: 20px'">
        <template #value>Pedro</template>
        <template #title>Vendas: R$7.234.00</template>
    </CWidgetStatsA>
    </CCol>
    <CCol :xs="3">
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'WidgetsStatsA',
}
</script>
