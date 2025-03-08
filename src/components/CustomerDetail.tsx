export default function CustomerDetail({ customerId }: { customerId: string }) {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">顧客詳細</h2>
      <p>顧客ID: {customerId}</p>
    </div>
  );
}
