import { useState, useEffect } from 'react';
import { Users, Calendar, BarChart3, TrendingUp, Filter, Search } from 'lucide-react';
import { getTestRecords } from '../api';
import type { TestRecord } from '../types';

export default function AdminPage() {
  const [records, setRecords] = useState<TestRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadRecords();
  }, []);

  const loadRecords = async () => {
    setIsLoading(true);
    try {
      const response = await getTestRecords();
      if (response.success) {
        setRecords(response.data);
      }
    } catch (error) {
      console.error('加载记录失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredRecords = records.filter(
    (record) =>
      record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.player_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    total: records.length,
    today: records.filter(
      (r) => new Date(r.created_at).toDateString() === new Date().toDateString()
    ).length,
    avgAge: 'N/A',
    topPersonality: Object.entries(
      records.reduce((acc, r) => {
        acc[r.personality] = (acc[r.personality] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    ).sort((a, b) => b[1] - a[1])[0]?.[0] || '-',
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-worldcup-green to-field-green rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">世界杯球员测试 - 后台管理</h1>
                <p className="text-sm text-gray-500">查看用户测试记录</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">
                <Calendar className="w-4 h-4 inline mr-1" />
                {new Date().toLocaleDateString('zh-CN')}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">总测试人数</p>
                <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">今日测试</p>
                <p className="text-2xl font-bold text-gray-800">{stats.today}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">最受欢迎性格</p>
                <p className="text-2xl font-bold text-gray-800">{stats.topPersonality}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Filter className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">匹配球星数</p>
                <p className="text-2xl font-bold text-gray-800">
                  {new Set(records.map((r) => r.player_id)).size}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">用户测试记录</h2>
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索用户名或球员名..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-worldcup-green/50 focus:border-worldcup-green"
                  style={{ width: '300px' }}
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    用户昵称
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    血型
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    星座
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    MBTI
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    性格
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    匹配球员
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    创建时间
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {isLoading ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center">
                      <div className="w-8 h-8 border-4 border-worldcup-green border-t-transparent rounded-full animate-spin mx-auto" />
                    </td>
                  </tr>
                ) : filteredRecords.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                      暂无测试记录
                    </td>
                  </tr>
                ) : (
                  filteredRecords.map((record) => (
                    <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className="font-medium text-gray-800">{record.name}</span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-gray-600">
                        {record.blood_type}型
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-gray-600">
                        {record.zodiac}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {record.mbti}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-gray-600">
                        {record.personality}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className="flex items-center gap-2">
                          <span className="text-xl">{record.player_flag}</span>
                          <span className="font-medium text-gray-800">{record.player_name}</span>
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-gray-500 text-sm">
                        {formatDate(record.created_at)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {!isLoading && filteredRecords.length > 0 && (
            <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
              <p className="text-sm text-gray-500 text-right">
                共 {filteredRecords.length} 条记录
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
