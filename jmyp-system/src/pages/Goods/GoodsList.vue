<template>
    <div>
        <div class="Goodslist avert">
            <GoodsSearch/>
            <GoodsList/>
            <GoodsTable/>
        </div>
    </div>
</template>

<script>
import GoodsSearch from '../../components/GoodsList/search'
import GoodsList from '../../components/GoodsList/list'
import GoodsTable from '../../components/GoodsList/table'
export default {
    components:{
        GoodsSearch,
        GoodsList,
        GoodsTable
    }
}
</script>


