<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';

	function toastDemo(): void {
		const t: ToastSettings = {
			message: '👋 Hello and welcome to Skeleton.',
			callback: (response) => console.log(response)
		};
		toastStore.trigger(t);
	}
</script>

<Toast />
<div class="container">
	<button on:click={toastDemo}> Test notify </button>
</div>
