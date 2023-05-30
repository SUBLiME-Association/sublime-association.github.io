<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
  import { base } from '$app/paths';

	function toastDemo(): void {
		const t: ToastSettings = {
			message: '👋 Hello and welcome to Skeleton.',
			callback: (response) => console.log(response)
		};
		toastStore.trigger(t);
	}

</script>

<Toast />
<nav>

  <a href="{base}/">Home</a>

  <a href="{base}/about">About</a>

</nav>
<div class="container">
	<button on:click={toastDemo}> Test notify </button>
</div>