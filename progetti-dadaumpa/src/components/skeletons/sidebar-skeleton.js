export default function SidebarSkeleton() {
  return (
    <div class="w-full bg-white shadow flex flex-col my-4 p-6 animate-pulse">
      <div class="h-5 bg-gray-200 rounded w-1/4"></div>
      <div class="grid grid-cols-1 gap-3 mt-5">
        <div class="w-full h-80 bg-gray-200 rounded"></div>
        <div class="w-full h-80 bg-gray-200 rounded mt-5"></div>
        <div class="w-full h-80 bg-gray-200 rounded mt-5"></div>
      </div>
      <div class="h-12 bg-gray-200 rounded w-full mt-5"></div>
    </div>
  );
}
