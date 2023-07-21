<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title" :subTitle="table1.subTitle">
        <div slot="raw-content" class="table-responsive">
          <paper-table :data="table1.data" :columns="table1.columns">
          </paper-table>
        </div>
      </card>
    </div>

    <div class="col-12">
      <card class="card-plain">
        <div class="table-full-width table-responsive">
          <paper-table
            type="hover"
            :title="table2.title"
            :sub-title="table2.subTitle"
            :data="table2.data"
            :columns="table2.columns"
          >
          </paper-table>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import { PaperTable } from "@/components";
const tableColumns = ["OS", "Cliente", "Descrição", "Processo", "Bisnaga"];
const tableData = [
  {
    os: 1,
    cliente: "Dakota Rice",
    descrição: "$40.000",
    processo: "Niger",
    bisnaga: "Oud-Turnhout"
  },
  {
    os: 2,
    cliente: "Minerva Hooper",
    descrição: "$23,789",
    processo: "Curaçao",
    bisnaga: "Sinaai-Waas",
  },
  {
    os: 3,
    cliente: "Sage Rodriguez",
    descrição: "$56,142",
    processo: "Netherlands",
    bisnaga: "Baileux",
  },
  {
    os: 4,
    cliente: "Philip Chaney",
    descrição: "$38,735",
    processo: "Korea, South",
    bisnaga: "Overland Park",
  },
  {
    os: 5,
    cliente: "Doris Greene",
    descrição: "$63,542",
    processo: "Malawi",
    bisnaga: "Feldkirchen in Kärnten",
  },
];

export default {
  components: {
    PaperTable,
  },
  data() {
    return {
      table1: {
        title: "Stripped Table",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns],
        data: [...tableData],
      },
      table2: {
        title: "Table on Plain Background",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns],
        data: [...tableData],
      },
    };
  },
};
</script>
<style></style>
